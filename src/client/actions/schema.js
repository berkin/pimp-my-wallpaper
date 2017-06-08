import { schema } from 'normalizr'

export const job = new schema.Entity('jobs')
export const arrayOfJobs = new schema.Array(job)
