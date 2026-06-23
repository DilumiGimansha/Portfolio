import { Badge, Button, Card, Group, Image, Text, useMatches } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

interface CertificateCardProps {
    title: string;
    issuer: string;
    image: string;
    date: string;
    credentialId?: string;
    skills: string[];
    link: string;
}

const CertificateCard = (props: CertificateCardProps) => {
    const badge = useMatches({
        xsm: "sm", md: "md", lg: "lg"
    });

    return (
        <div
            className="w-[32%] lg-mx:w-[46%] md-mx:w-[48%] sm-mx:w-[90%] xs-mx:w-full"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <Card
                className="!bg-bgColor cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.02] mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA80] xs-mx:!shadow-[0_0_10px_1px_#64FFDA80] !border-primaryColor border-2"
                shadow="lg"
                padding="sm"
                radius="lg"
                withBorder
            >
                {/* Certificate Image */}
                <Card.Section className="p-3">
    <Image
        className="!rounded-lg !shadow-[0_0_5px_0_#64FFDA]"
        fit="contain"
        src={props.image}
        alt={props.title}
    />
</Card.Section>

                {/* Title + Issuer Row */}
                <Group justify="space-between" mt="xs" mb="xs" align="flex-start">
                    <div className="!text-2xl !font-bold !text-white sm-mx:!text-xl leading-tight">
                        {props.title}
                    </div>
                </Group>

                {/* Issuer & Date */}
                <Group mb="sm" justify="space-between" className="!gap-2">
                    <Badge size={badge} variant="outline" color="#64FFDA">
                        {props.issuer}
                    </Badge>
                    <Text className="!text-xs !text-primaryColor font-mono" c="dimmed">
                        {props.date}
                    </Text>
                </Group>

                {/* Skills Badges */}
                <Group mb="lg" className="!gap-2">
                    {props.skills.map((skill: string, index: number) =>
                        index < 8 && (
                            <Badge key={index} size={badge} variant="light" color="#64FFDA">
                                {skill}
                            </Badge>
                        )
                    )}
                </Group>

                {/* Credential ID */}
                {props.credentialId && (
                    <Text className="!text-xs !text-justify" c="dimmed" mb="sm">
                        Credential ID:&nbsp;
                        <span className="text-primaryColor font-semibold">{props.credentialId}</span>
                    </Text>
                )}

                {/* View Certificate Button */}
                <Button
                    component="a"
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="#64FFDA"
                    variant="outline"
                    mt="auto"
                    radius="md"
                    rightSection={<IconExternalLink size={16} />}
                    fullWidth
                >
                    View Certificate
                </Button>
            </Card>
        </div>
    );
};

export default CertificateCard;
