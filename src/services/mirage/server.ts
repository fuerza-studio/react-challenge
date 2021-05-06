import { Server, Model, Factory, Response, belongsTo, hasMany } from 'miragejs';
import user from './routes/user';
import * as journal from './routes/journal';

export const handleErrors = (error: any, message = 'An error ocurred') => {
  console.error('Error: ', error);
  return new Response(400, undefined, {
    data: {
      message,
      isError: true,
    },
  });
};

export const setupServer = (env?: string): Server => {
  return new Server({
    environment: env ?? 'development',

    models: {
      entry: Model.extend({
        journal: belongsTo(),
      }),
      journal: Model.extend({
        entry: hasMany(),
        user: belongsTo(),
      }),
      user: Model.extend({
        journal: hasMany(),
      }),
    },

    factories: {
      user: Factory.extend({
        username: 'test',
        password: 'password',
        email: 'test@email.com',
      }),
    },

    seeds: (server): any => {
      server.create('user');
    },

    routes(): void {
      this.urlPrefix = 'https://fuerza.test';

      this.get('/journals/entries/:id', journal.getEntries);
      this.get('/journals/:id', journal.getJournals);

      this.post('/auth/login', user.login);
      this.post('/auth/signup', user.signup);

      this.post('/journals/', journal.create);
      this.post('/journals/entry/:id', journal.addEntry);

      this.put('/journals/entry/:id', journal.updateEntry);
      this.put('/journals/:id', journal.updateJournal);
    },
  });
};
