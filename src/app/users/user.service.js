import { userRepository } from './users.repository'

class UserService {
  constructor({ repository = userRepository } = {}) {
    this.repository = repository
  }

  async findAll() {
    return await this.repository.findAll()
  }

  async findById(id) {
    return await this.repository.find({ id })
  }

  async findByFirstName(first_name) {
    return await this.repository.find({ first_name })
  }

  async insert(user) {
    return await this.repository.insert(user)
  }
}

const userService = new UserService()

export { userService }
