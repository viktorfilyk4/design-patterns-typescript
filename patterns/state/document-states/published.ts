import { logger } from "../../../utils/logger"
import Document from "../Document"
import { DocumentState } from "../types"
import ReviewState from "./review"

export default class PublishedState implements DocumentState {
  review(document: Document, text?: string): void {
    logger.green(`- Sending document '${document.name}' to review.`)
    document.text = text ?? ""
    document.approvedBy = ""
    document.publishedBy = ""
    document.setState(new ReviewState())
  }
  approve(document: Document): void {
    logger.green(`- Document '${document.name}' is already approved.`)
  }
  publish(document: Document): void {
    logger.green(`- Document '${document.name}' is already published.`)
  }
}
