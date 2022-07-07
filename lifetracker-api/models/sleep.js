const db = require('../db')
const {BadRequestError, NotFoundError} = require('../utils/errors')

class Sleep {
    static async listSleepForUser({user}) {
        //list all posts in db in descerndig order of when they are created
        /*id          SERIAL PRIMARY KEY,
    start_time  TIMESTAMP NOT NULL,
    end_time    TIMESTAMP NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    user_id     INTEGER NOT NULL, */
        const results = await db.query(
            `
                SELECT s.id,
                       s.start_time AS "startTime,
                       s.end_time AS "endTime",
                       s.user_id AS "userId",
                       s.created_at AS "createdAt" 
                FROM sleep AS s
                    JOIN users AS u ON u.id = s.user_id
                WHERE s.user_id = (SELECT users.id FROM users WHERE email = $1);
            `, [user.email]
        )
        return results.rows

    }

    static async createSleep({sleep, user}) {
        //create single post
        const requiredFields = ['startTime', 'endTime'];
        requiredFields.forEach(field => {
            if(!sleep.hasOwnProperty(field)) {
                throw new BadRequestError(`Required field- ${field} - missing from request body.`)
            }
        })
        const results = await db.query(
            `
                INSERT INTO sleep (start_time, end_time, user_id)
                VALUES ($1, $2, (SELECT id FROM users WHERE email = $3))
                RETURNING id,
                          user_id AS "userId",
                          start_time AS "startTime",
                          end_time AS "endTime";
            `, [sleep.startTime, sleep.endTime, user.email]
        )
        return results.rows[0]

    }

    static async fetchSleepById(postId) {
        //fetch single post
    }
}

module.exports = Sleep;