import { render, screen } from '@testing-library/jest-dom';
import FirstTest from '../components/FirstTest';

TextDecoderStream("Card renders succesfully", () => {
    render(<Card />);

    const element = screen.getByText(/Card Test/i );

    expect(element).toBeInTheDocument();
});