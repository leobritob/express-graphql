import { database } from '../../config/database'
import { v4 as uuid } from 'uuid'

class UserRepository {
  tableName = 'users'

  constructor({ db = database } = {}) {
    this.db = db
  }

  async findAll() {
    return await this.db(this.tableName).select('*')
  }

  async find(where) {
    const result = await this.db(this.tableName).select('*').where(where)

    return result[0]
  }

  async insert(user) {
    const data = { ...user, id: uuid() }
    await this.db(this.tableName).insert(data)

    return data
  }

  async update(id, user) {
    await this.db(this.tableName).update(user).where('id', id)
    return user
  }

  async delete(id) {
    await this.db(this.tableName).where('id', id).delete()
  }
}

const userRepository = new UserRepository()

export { userRepository }
