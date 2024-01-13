import { socials } from '../../socials';
import SocialBadge from '../badges/SocialBadge';
import './styles/footer.scss';

/**
 *
 * @returns
 */
export default function Footer() {

    return <footer>
        {
            socials &&
            <div
                className='socials-row'
            >
                {
                    Object.values(socials.groups.organization)
                        .map((social) => {
                            return <SocialBadge
                                key={social.icon}
                                social={social}
                                noClr
                            />;
                        })
                }
            </div>
        }
    </footer>;
}