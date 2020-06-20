
/*
Hello.
This is the original source code for the ViOS Project.
This code is protected with Canadadian Copyright Laws.
This code is also protected by An Allium Corporate License.
This version (0.0.2) Contains notes for developers.
Read the (Update-Logs) in the folder "Info".
This text was inputted 5/20/2020 at 11:37 PM.
Last Edit: 5/20/2020 at 11:39 PM
*/



// Connect Discord
const Discord = require('discord.js');
 const bot = new Discord.Client();

 // Discord Bot Token - Don't Share This!
 const token = 'NzAxODk4ODUwMjk3OTcwNzg4.Xp5A-w.zbRLwcCmEdZ03X3VkM6Zwl4rt_g';
 // Default Prefix
const PREFIX = '>';



 
 bot.on('ready',() =>{
   console.log('The system program has been confirmed and is online.  | (c) 2020 Unifiton Corporation')
   bot.user.setActivity('unifiton.ddns.net | NetSys')
})

bot.on('message', message=>{

   let args = message.content.substring(PREFIX.length).split(" ");

   //
   switch(args[0]){
       case 'currentcommands':
          message.channel.send('Command Inputs for NetSys. | >currentcommands - Will state current commands. | >modules - Will state active modules | >system - Displays system version and Diagnostic Information ') 
          break;
      case 'modules':
         message.channel.send('vcga.ddns.net')
         break;
      case 'system':
         if(args[1] === 'version'){
            message.channel.send('ViNS, ViNET, ViOS Interface | Version 0.0.3 | Alpha | U')
         }else{
            message.channel.send('The command you inputed was not found. Please try again')
         }
         break;
         
         case 'commands':
          if(args[1] === 'list'){
             message.channel.send('Command list for ViNS  ')
          }else{
             message.channel.send('The command you inputed was not found. Please try agai')
          }
       break;       
       case 'commands':
         if(args[2] === 'list'){
            message.channel.send('Command list for ViNS  ')
         }else{
            message.channel.send('The command you inputed was not found. Please try again')
         }
      break;       
   
       case 'info':
         if(args[1] === 'version'){
            message.channel.send(' ViNS Registry API |')
         }else{
            message.channel.send('The command you input ')
         }
      break;     
   
     
      case 'info':
        if(args[1] === 'version'){
           message.channel.send(' ViNS Registry API |')
        }else{
           message.channel.send('The command you input ')
        }
     break;     

    
  
   
   



  
     
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  
      }
       
})
  
         
   
   
   
   bot.login(token);
