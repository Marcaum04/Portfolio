import classNames from 'classnames';
import logo from 'assets/Logo.png';

type Props = {
    aparelho?: 'desktop' | 'mobile';
};

export function Logo({ aparelho }: Props) {
    let bgColor = '';
    if(aparelho === 'desktop') bgColor = '';
    return <img src={logo} alt='Logo' className={classNames("w-15v py-2 px-4 bg-primary font-bold",bgColor)}/>
    
}