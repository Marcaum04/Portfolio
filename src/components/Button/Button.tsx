import classNames from 'classnames';

type Props = {
    variant?: 'default' | 'button';
    children: React.ReactNode;
};

export function Button({ variant, children }: Props) {
    let bgColor = 'text-black';
    if(variant === 'button') bgColor = 'bg-button hover:bg-buttonLight active:bg-buttonDark transiton-all text-white';
    return <button className={classNames("py-2 px-4 rounded-md bg-primary font-bold",bgColor)}>{children} </button>
    
}