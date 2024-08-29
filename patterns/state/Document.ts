import { logger } from "../../utils/logger"
import DraftState from "./document-states/draft"
import { DocumentState } from "./types"

export default class Document {
  private state: DocumentState
  public text: string
  public approvedBy: string
  public publishedBy: string

  constructor(public name: string) {
    this.state = new DraftState()
    this.text = ""
    this.approvedBy = ""
    this.publishedBy = ""
  }

  logMetadata() {
    logger.blue(`
---------------> DOCUMENT <-----------------
Text: ${this.text}
Approved by: ${this.approvedBy}
Published by: ${this.publishedBy}
<------------------------------------------>
    `)
  }

  setState(state: DocumentState) {
    this.state = state
  }

  edit(text?: string) {
    this.state.review(this, text)
  }

  approve(approver?: string) {
    this.state.approve(this, approver)
  }

  publish(publisher?: string) {
    this.state.publish(this, publisher)
  }
}
