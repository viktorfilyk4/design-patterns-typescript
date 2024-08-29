import Document from "./Document"

export interface DocumentState {
  review(document: Document, text?: string): void
  approve(document: Document, approver?: string): void
  publish(document: Document, publisher?: string): void
}
