import { Ticket } from './ticket';
import tickets from './ticket-schema';

export const getTicket = async (req:any, res:any) => {
  tickets.find((err: any, result: any) => {
        if (err) {
          console.log(err.message)
          res.send("Error!");
        } else {
        console.log(JSON.stringify(result))
          res.send(result);
        }
      });
  };

  export const createTicket = async (req:any, res:any) => {
    const request: Ticket = req.body;
    console.log(JSON.stringify(request))
    let prod = new tickets(request);
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

export const updateroduct = async (req:any, res:any) => {
    const product: Ticket = req.body;
    //Update
  };

  export const deleteproduct = async (req:any, res:any) => {
    const productID: number = req.body['id'];
    //delete
  };