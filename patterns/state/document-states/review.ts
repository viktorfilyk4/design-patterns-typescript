import { logger } from '../../../utils/logger';
import Document from '../Document';
import { DocumentState } from '../types';
import ApprovedState from './approved';

export default class ReviewState implements DocumentState {
  review(document: Document, text?: string): void {
    logger.green(`- Sending document '${document.name}' for review.`);
    document.text = text ?? '';
  }
  approve(document: Document, approver?: string): void {
    logger.green(`- Approving document '${document.name}'`);
    document.approvedBy = approver ?? '';
    document.setState(new ApprovedState());
  }
  publish(document: Document): void {
    logger.green(`- Cannot publish document when it is under review.`);
  }
}
