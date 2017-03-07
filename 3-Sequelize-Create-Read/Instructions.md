# Sequelize Create & Read

In this activity we will add CREATE and READ functionality to the todolist app.

## Instructions

1. Open the folder and run `npm install`.

2. Update the `config.json` file's development object with your own local MYSQL database settings.

3. Navigate to the `api-routes.js` folder.

4. Add a Sequelize `findAll` method inside the GET route which finds all of the todos and returns them to the user as JSON.

5. Add a Sequelize `create` method to the POST route to save a new todo to the database using the data sent to the server in req.body.

6. To test if this worked, open your terminal and run `node server` and navigate to localhost:8080. If you are able to save new todos, you were successful.

7. Hint: We can access the Todo model here with `db.Todo`

If you get stuck or finish early, refer to the [Sequelize CRUD Actions Cheat Sheet](../Supplemental/SequelizeCRUDActionsCheatSheet.pdf) or the Sequelize Docs below.

<http://docs.sequelizejs.com/en/latest/api/model/#findalloptions-promisearrayinstance>

<http://docs.sequelizejs.com/en/latest/api/model/#createvalues-options-promiseinstance>
