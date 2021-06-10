export interface Ticket {
  id: number | null;
  complain: string;
  customer: string;
  status: string;
  // prodRating?: number;÷
}


export const tickets: Ticket[] = [
      {
          id: 1,
          complain: 'Netgear Cable Modem',
          customer: 'CM700',
          status: 'Initiated',
          // prodRating: 4.0
      },
      {
          id: 2,
          complain: 'Linksys Cable Modem',
          customer: 'LK700',
          status: 'Pending',
          // prodRating: 4.1
      },
      {
          id: 3,
          complain: 'TP Link Cable Modem',
          customer: 'TPL700',
          status: 'Solved',
          // prodRating: 4.2
      },
      
  ];