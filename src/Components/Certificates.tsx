import { CertificateInfo } from "../User";
import CertificateCard from "./CertificateCard";

const Certificates = () => {
    return (
        <div className="px-16 my-10 font-mono md-mx:px-6" id="Certificates">
            <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl text-center mb-10 font-bold text-white">
                <span className="text-primaryColor">03.&nbsp;</span>Certificates
            </h1>
            <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
                {CertificateInfo.map((cert: any, index: number) => (
                    <CertificateCard
                        key={index}
                        title={cert.title}
                        issuer={cert.issuer}
                        image={cert.image}
                        date={cert.date}
                        credentialId={cert.credentialId}
                        skills={cert.skills}
                        link={cert.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Certificates;
