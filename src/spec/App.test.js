import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('renders page', () => {
  it('renders question', () => {
    render(<App />);
    const header = screen.getByText(/Why did the mushroom go to the party?/i);
    expect(header).toBeInTheDocument();
  });

  it('renders button', () => {
    render(<App />);
    const button = screen.getByText(/Tell Me!/i);
    expect(button).toBeInTheDocument();
  });
})

describe('click event', () => {
  it('calls onClick, reveals answer', () => {
    render(<App />);
    expect(/He was a fungi!/).not.toBeInTheDocument;
    const button = screen.getByText(/Tell Me!/i);
    fireEvent.click(button);
    const answer = screen.getByText(/He was a fungi!/i)
    expect(answer).toBeInTheDocument;
  });
})
