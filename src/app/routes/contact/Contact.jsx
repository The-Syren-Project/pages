import SocialBadge from '../../components/badges/SocialBadge';
import { socials } from '../../socials';
import './styles/contact.scss';

/**
 *
 * @returns
 */
export default function ContactRoute() {
    return <div
        className='route contact'
    >
        <div
            className='socials-group organization'
        >
            <h1
                className='heading'
            >
                Check us out on:
            </h1>

            <div
                className='socials-section'
            >
                <div
                    className='socials-wrapper'
                >
                    {
                        Object.keys(socials.groups.organization)
                            .map((social) => {
                                return <div
                                    key={social}
                                    className='social-row'
                                >
                                    <h3
                                        className='heading'
                                    >
                                        {social}
                                    </h3>

                                    <SocialBadge
                                        social={socials.groups.organization[social]}
                                    />
                                </div>;
                            })
                    }
                </div>
            </div>
        </div>

        <div
            className='socials-group organization'
        >
            <h1
                className='heading'
            >
                The Developers
            </h1>

            {
                Object.keys(socials.groups.devs)
                    .map((dev) => {
                        return <div
                            key={dev}
                            className='socials-section'
                        >
                            <h2
                                className='heading'
                            >
                                {dev}
                            </h2>

                            <div
                                className='socials-wrapper'
                            >
                                {
                                    Object.keys(socials.groups.devs[dev])
                                        .map((social) => {
                                            return <div
                                                key={social}
                                                className='social-row'
                                            >
                                                <h3
                                                    className='heading'
                                                >
                                                    {social}
                                                </h3>

                                                <SocialBadge
                                                    social={socials.groups.devs[dev][social]}
                                                />
                                            </div>;
                                        })
                                }
                            </div>
                        </div>;
                    })
            }
        </div>
    </div>;
}