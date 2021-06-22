import { client, q } from './db'

const USERS_COLL = 'users';

// CREATE POST
const createUser = ({ password, email, name }) => client.query(
  q.Create(
    q.Collection(USER_COLL),
    {
      credentials: {
        password: password
      },
      data: {
        email: email,
        name: name
      },
    },
  )
)
  .then(ret => ret)
  .catch(err => console.warn(err));

// AUTHENTICATE USER
const AuthUser = ({ email, password }) => client.query(
  q.Login(
    q.Match(
      q.Index('users_email'), email),
      { password: password }
  )
);

// LOGOUT USER
const LogoutUser = () => client.query(
  q.Logout(true)
);

// CHANGE PASSWORD
const resetPassword = ({ ref, password }) => client.query(
  q.Update(
    q.Ref(
      q.Collection(USERS_COLL), ref
    ),
    {
      credentials: {
        password: password
      }
    }
  )
);

// TODO: Read User
// TODO: Delete User

export default { createUser, AuthUser, LogoutUser, resetPassword };
