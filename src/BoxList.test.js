import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', () => {
    render(<BoxList />);
});

it('matches the snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it('shows no boxes when the page loads', () => {
    const { queryByTestId } = render(<BoxList />);
    const BoxDiv = queryByTestId('Box');

    expect(BoxDiv).not.toBeInTheDocument();
})