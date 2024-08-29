import { greenLogger } from "../../../utils/loggers"
import Document from "../Document"
import { DocumentState } from "../types"
import PublishedState from "./published"
import ReviewState from "./review"

export default class ApprovedState implements DocumentState {
  review(document: Document, text?: string): void {
    greenLogger(`- Sending document '${document.name}' for review.`)
    document.text = text ?? ""
    document.approvedBy = ""
    document.setState(new ReviewState())
  }
  approve(document: Document): void {
    greenLogger(`- Document '${document.name}' is already approved.`)
  }
  publish(document: Document, publisher?: string): void {
    greenLogger(`- Publishing '${document.name}'`)
    document.publishedBy = publisher ?? ""
    document.setState(new PublishedState())
  }
}
