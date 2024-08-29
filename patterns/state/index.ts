import Document from "./Document"

const document = new Document("Test document")

document.edit("Bla bla bla...")
document.approve("Johnny Ive")
document.publish("Johnny Ive")
document.logMetadata()
document.edit("Bla bla bla 222 ....")
document.publish("Johnny Ive")
document.approve("John Edwards")
document.publish("John Edwards")
document.logMetadata()
document.edit("some text")
document.logMetadata()
