import Api from './Api';

const resource = '/posts';

export default {
  get() {
    return Api.get(`${resource}`);
  },

  getPost(id) {
    return Api.get(`${resource}`, { params: { id } });
  },

  createPost(data) {
    return Api.post(`${resource}`, data);
  }
};
