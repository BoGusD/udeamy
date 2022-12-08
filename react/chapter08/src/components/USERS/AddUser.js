import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
export default function AddUser(props) {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="username" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}