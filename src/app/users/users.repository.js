import { database } from '../../config/database'
import { v4 as uuid } from 'uuid'

class UserRepository {
  constructor({ db = database } = {}) {
    this.db = db
  }

  async findAll() {
    return await this.db('users').select('*')
  }

  async find(where) {
    const result = await this.db('users').select('*').where(where)

    return result[0]
  }

  async save(user) {
    const data = { ...user, id: uuid() }
    await this.db('users').insert(data)

    return data
  }
}

const userRepository = new UserRepository()

export { userRepository }
