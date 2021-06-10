import { Ticket, tickets } from "./ticket";

export const getAllProducts = async (): Promise<Ticket[]> => {
    return tickets;
  };

export const createProducts = async (product:Ticket): Promise<void> => { 
    tickets.push(product);  
}

export const updateProducts = async (product:Ticket): Promise<void> => { 
    let index = tickets.findIndex(d => d.id === product['id']);
    if(index >0 || index==0)
   {
    tickets[index]['status'] = product['status'];
    // products[index]['productCode'] = product['productCode'];
    // products[index]['prodRating'] = product['prodRating'];

   }
}


export const deleteProducts = async (id:number): Promise<void> => { 
    console.log(`in delete product index is ${JSON.stringify(id)}`)
    let index = tickets.findIndex(d => d.id === id);
    console.log(`in delete product index is ${index}`)
    if(index >0 || index==0)
    tickets.splice(index, 1);
    
}