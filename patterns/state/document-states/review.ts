import { greenLogger } from "../../../utils/loggers"
import Document from "../Document"
import { DocumentState } from "../types"
import ApprovedState from "./approved"

export default class ReviewState implements DocumentState {
  review(document: Document, text?: string): void {
    greenLogger(`- Sending document '${document.name}' for review.`)
    document.text = text ?? ""
  }
  approve(document: Document, approver?: string): void {
    greenLogger(`- Approving document '${document.name}'`)
    document.approvedBy = approver ?? ""
    document.setState(new ApprovedState())
  }
  publish(document: Document): void {
    greenLogger(`- Cannot publish document when it is under review.`)
  }
}
