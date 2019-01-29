import 'isomorphic-unfetch';

const newService = {
  getAlls: (box = 'diembao', page = 1) =>
    fetch(`https://p.voz.vn/feed/?box=${box}&page=${page}`).then(res =>
      res.json()
    ),
  getDetail: postId =>
    fetch(`https://p.voz.vn/posts/${postId}`).then(res => res.json()),

  getComments: postId =>
    fetch(`https://p.voz.vn/posts/${postId}/comments`).then(res => res.json()),
};

export default newService;
