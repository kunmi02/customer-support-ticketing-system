import {User} from './user'
import users from './user-schema'

export const createUser = async (req:any, res:any) => {
  const request: User = req.body;
  console.log(JSON.stringify(request))
  let prod = new users(request);
  prod.save((err:any, result:any) => {
      if (err) {
          console.log(err.message)
          res.send("Error!");
        } else {
        console.log(JSON.stringify(result))
          res.send(result);
        }
  });
};

export const getUsers = async (req:any, res:any) => {
  users.find((err: any, result: any) => {
        if (err) {
          console.log(err.message)
          res.send("Error!");
        } else {
        console.log(JSON.stringify(result))
          res.send(result);
        }
      });
  };

  export const getUserTicket = async (req:any, res:any) => {
    let foundUser = await users.find({_id:req.body.customer}).populate("tickets")
    console.log(foundUser)
    // console.log(req)
    // console.log(req.body.customer)
    users.find((err: any, result: any) => {
          if (err) {
            // console.log(err.message)
            res.send("Error!");
          } else {
          // console.log(JSON.stringify(result))
            res.send(result);
          }
        });
    };