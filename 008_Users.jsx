
import { BiUserCircle } from "react-icons/bi";

export const Users = () => {

  const users = [
    { name: 'Pepo', age: 32, image: 'https://robohash.org/user1' },
    { name: 'Coco', age: 55, image: 'https://robohash.org/user2' },
    { name: 'Gordor', age: 44, image: 'https://robohash.org/user3' }
  ];

  return (<>
    {
      users.map(({ name, age, image }, id) => {
        return (
          <div key={id}>
            <BiUserCircle />
            <label>Name:</label>
            <h1>{name}</h1>
            <label>Age:</label>
            <h2>{age}</h2>
            <img src={image} />
          </div>
        )
      })
    }
  </>)


}