import Document from "./Document"

const document = new Document("Test document")

document.edit("Bla bla bla...")
document.approve("Viktor Filyk")
document.publish("Viktor Filyk")
document.logMetadata()
document.edit("Bla bla bla 222 ....")
document.publish("Viktor Filyk")
document.approve("John Edwards")
document.publish("John Edwards")
document.logMetadata()
document.edit("some text")
document.logMetadata()
