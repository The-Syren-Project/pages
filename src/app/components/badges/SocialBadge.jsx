import './styles/social-badge.scss';

/**
 *
 * @param {*} param0
 * @returns
 */
export default function SocialBadge({ social, noClr = false, ...props }) {

    const className = ['social-badge brand', !noClr && social.icon];

    return <a
        className={className.join(' ')}
        {...social.link}
        target='_blank'
        {...props}
    >
        <i
            className={`icon bi bi-${social.icon}`}
        />
    </a>;
}