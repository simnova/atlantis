import styles from './logo.module.css'; 

export enum LogoSize {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

export interface HeadingProps {
    size: LogoSize;
    className?: string;
    children: React.ReactNode | string;
}

export const Logo: React.FC<HeadingProps> = (props) => {
    let commonClasses = `font-normal leading-normal mt-0 mb-2 ${props.className} ${styles['logo']}`;

    switch (props.size) {
        case LogoSize.H1: 
            return <h1 className={`text-6xl ${commonClasses}`}>{props.children}</h1>
        case LogoSize.H2:
            return <h2 className={`text-5xl ${commonClasses}`}>{props.children}</h2>
        case LogoSize.H3:
            return <h3 className={`text-4xl ${commonClasses}`}>{props.children}</h3>
        case LogoSize.H4:
            return <h4 className={`text-3xl ${commonClasses}`}>{props.children}</h4>
        case LogoSize.H5:
            return <h5 className={`text-2xl ${commonClasses}`}>{props.children}</h5>
        case LogoSize.H6:
            return <h6 className={`text-1xl ${commonClasses}`}>{props.children}</h6>
        default:
            return <h1 className={`text-6xl ${commonClasses}`}>{props.children}</h1>
    }
    
}