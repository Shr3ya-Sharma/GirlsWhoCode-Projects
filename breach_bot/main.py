#Breach Bot Starter Code
breachYear = 2017

#Greets user
print("Hello! I'm BreachBot.")
userName = input("What is your name?\n")
print("Nice to meet you " + userName)

#Recounts year of breach
todaysYear = input("What year is it?\n")
timePassed = int(todaysYear) - breachYear
print("Wow! That means it has been " + str(timePassed) + " years since the NHS WannaCry ransomware attack!")

#Introduces breach
print("Would you like to learn about the 2017 NHS WannaCry ransomware attack?")
giveInfo = input("Type 'yes' or 'no'\n")

#Explains breach
while giveInfo.lower() == "yes":
  print("What would you like to learn more about? Enter the lowercase letter of the following options: \n(a) Breach Details, (b) Organization's Response, or (c) I would like to hear your reflection!")
  topic = input()
  
  if topic.lower() == "a":
    print("In May 2017, the WannaCry ransomware worm exploited the EternalBlue vulnerability in Windows SMBv1 (MS17-010) to remotely compromise and spread across vulnerable NHS systems. It encrypted files and disrupted access to healthcare systems, but there was no confirmed theft of NHS patient data.")
  
  elif topic.lower() == "b":
    print("The NHS isolated affected systems, activated certain incident-response procedures, and deployed security patches to vulnerable Windows machines. It also recommended disabling SMBv1, blocking vulnerable SMB ports, updating unsupported systems, and maintaining security software.")
  
  elif topic.lower() == "c":
   break
  
  else:
    print("Sorry, I didn't catch that. Choose one of the options listed.")
  
  input("Press enter to continue\n")

#-------------------------------------------------------

#Introduces my take
print("\nI'm excited to share my perspective with you. Are you ready to hear my take?")
giveInfo = input("Type 'yes' or 'no'\n")

#Shares my take
while giveInfo.lower() == "yes":
  print("What would you like to learn more about? Enter the lowercase letter of the following options: \n(a) Relation to CIA Triad, (b) My Reaction, (c) My Advice, or (d) None.")
  topic = input()
  
  if topic.lower() == "a":
    print("The WannaCry attack primarily compromised availability by making NHS systems inaccessible, while also affecting integrity through file encryption, with no confirmed major compromise of confidentiality.")
  
  elif topic.lower() == "b":
    print("I agree with the NHS's response because isolating affected systems, applying security patches, and restricting vulnerable SMB services helped prevent further spread!")
  
  elif topic.lower() == "c":
   print("I would advise affected community members to keep their operating systems and security software updated and avoid suspicious links or attachments. Stay safe!")
      
  elif topic.lower() == "d":
      break
      
  else:
    print("Sorry, I didn't catch that. Choose one of the options listed.")
  
  input("Press enter to continue\n")
    
#Chatbot ends conversation
print("Thanks for chatting with me, and I hope you learned something new!")