const router = require('express').Router();
const { User } = require('../../models');

// POST route for a new user instance
router.post('/', async (req, res) => {
  try {
    const dbUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST route to login after user has signed up
router.post('/login', async (req, res) => {
  try {
    const dbUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUser) {
      res
        .status(400)
        .json({ message: 'Wrong email or password. Try entry again!' });
      return;
    }

    const validPassword = await dbUser.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Wrong email or password. Try entry again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUser, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST request that allows the user to log out of application
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
