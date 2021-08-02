import { render, fireEvent, queryByLabelText } from '@testing-library/react';
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
});

it('shows a box when the form is submitted', () => {
    const { queryByTestId, getByLabelText, getByText } = render(<BoxList />);
    const bgColorInput = getByLabelText('Background Color:');
    const widthInput = getByLabelText('Width', {exact: false});
    const heightInput = getByLabelText('Height', {exact: false});
    const btn = getByText('Add Box');

    fireEvent.change(bgColorInput, {target: {value: 'red'}});
    fireEvent.change(widthInput, {target: {value: 50}});
    fireEvent.change(heightInput, {target: {value: 50}});
    fireEvent.click(btn);

    expect(getByText('X')).toBeInTheDocument();
    expect(queryByTestId('Box')).toBeInTheDocument();
});