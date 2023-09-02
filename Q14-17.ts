const peopleToInvite:string[] =["person1","person2","person3"]
const inviteMessage:string = "You have been invited to dinner on sunday "
const moreTablesFoundMessage:string = "We have found bigger tables so, we are inviting more guests now";
const inviteCancelMessage:string  = "sorry! you can’t invite to dinner";
function sendInvitations(peopleToInvite:string[],inviteMessage:string){
    for(let i = 0; i<peopleToInvite.length;i++){
        console.log(`\n ${inviteMessage} ${peopleToInvite[i]} `)
    }
}
sendInvitations(peopleToInvite,inviteMessage);
console.log(`\n the following person cannot come to dinner:  ${peopleToInvite.pop()}`);
// modify the list and add the invite the new person now
peopleToInvite.push("person4");
console.log("Sending second invitations...");

sendInvitations(peopleToInvite,inviteMessage);

// found bigger tables so, inviting more guests
sendInvitations(peopleToInvite,moreTablesFoundMessage);
// adding more guests now to array

// adding one person to start of the array
peopleToInvite.unshift("person5");

// adding one person to end of the array
peopleToInvite.push("person6");

// adding guest to middle of the array
console.log(peopleToInvite.splice(2,0,"middle person"))

sendInvitations(peopleToInvite,inviteMessage);

console.log("\n The table cannot arrive at time so, we can invite only two guests now\n");
// 

for(let i=0;i<4;i++){
   console.log(`${inviteCancelMessage} `,peopleToInvite.shift());       
}
sendInvitations(peopleToInvite,inviteMessage);
peopleToInvite.splice(0);
console.log("Array has been empty " + peopleToInvite.length );

// {per1,pe2,middle,per4,per5,per6}
