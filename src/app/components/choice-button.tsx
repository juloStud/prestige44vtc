import Button from 'react-bootstrap/Button';

interface ChoiceButtonProps {
    options: string[];
}

export default function ChoiceButton({ options }: ChoiceButtonProps) {
    return (
        <div className='row'>
            <div className="col-md-12 mx-auto d-flex justify-content-between flex-wrap">
            {options.map((option, index) => (
                <Button size="lg" variant="outline-primary" key={index}>{option}</Button>
            ))}
            </div>
        </div>
    );
}
