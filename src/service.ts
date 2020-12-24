// use microsware has framework to share repetitive implementation

import { MSWService, Service } from 'microsware'
// TODO:
// set up routes

const server : Service = new MSWService({ server : { httpport : 3000 } })
server.run()