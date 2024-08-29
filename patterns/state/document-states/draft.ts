import { greenLogger } from "../../../utils/loggers"
import Document from "../Document"
import { DocumentState } from "../types"
import ReviewState from "./review"

export default class DraftState implements DocumentState {
  review(document: Document, text?: string): void {
    greenLogger(`- Sending document '${document.name}' for review.`)
    document.text = text ?? ""
    document.setState(new ReviewState())
  }
  approve(document: Document): void {
    greenLogger(`- Cannot approve document '${document.name}' in draft state!`)
  }
  publish(document: Document): void {
    greenLogger(`- Cannot publish document '${document.name}' in draft state!`)
  }
}
