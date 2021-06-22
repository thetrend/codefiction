import { client, q } from './db'

const POSTS_COLL = 'posts';

// CREATE POST
const createPost = ({ title, type, category, content }) => client.query(
  q.Create(
    q.Collection(POSTS_COLL),
    {
      data: {
        title: title,
        type: type,
        category: category,
        content: content
      },
    },
  )
)
  .then(ret => ret)
  .catch(err => console.warn(err));

// READ POSTS
const getAllPosts = client.query(
  q.Paginate(
    q.Match(
      q.Ref('indexes/all_posts')))
)
  .then((response) => {
    const postRefs = response.data;
    // create new query out of todo refs.
    // https://docs.fauna.com/fauna/current/api/fql/
    const getAllPostDataQuery = postRefs.map((ref) => {
      return q.Get(ref)
    })
    // query the refs
    return client.query(getAllPostDataQuery).then((data) => data)
  })
  .catch((error) => console.log('error', error.message));

// UPDATE POST
const editPost = (postId, newContent) => client.query(
  q.Update(
    q.Ref(q.Collection(POSTS_COLL), postId),
    { data: { content: newContent } },
  )
)
  .then((ret) => console.log(ret))
  .catch(err => console.warn(err));

// DELETE POST
const deletePost = postRef => client.query(
  q.Delete(q.Ref(q.Collection(POSTS_COLL), postRef))
)
  .then(res => res)
  .catch(err => console.warn(err.message));

export { createPost, getAllPosts, editPost, deletePost };
