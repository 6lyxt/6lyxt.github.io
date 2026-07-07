import type React from "react";
import type {LucideIcon} from "lucide-react";
import {
    Code2,
    Cpu,
    Database,
    GitBranch,
    LayoutGrid,
    MonitorSmartphone,
    RefreshCw,
    Server,
    ServerCog,
    ShoppingBag,
    UploadCloud,
} from "lucide-react";

type SkillCard = {
    icon: LucideIcon;
    title: string;
    tags: string[];
};

type SkillGroup = {
    label: React.ReactNode;
    items: SkillCard[];
};

const groups: SkillGroup[] = [
    {
        label: 'experience · technical',
        items: [
            {icon: Server, title: 'server infrastructure', tags: ['Azure', 'Docker', 'Kubernetes']},
            {icon: GitBranch, title: 'ci/cd', tags: ['ArgoCD', 'Bitbucket Pipelines', 'Azure DevOps']},
            {icon: UploadCloud, title: 'manual deployment', tags: ['Apache', 'Nginx']},
            {icon: RefreshCw, title: 'nodejs deployment', tags: ['reverse proxy']},
            {icon: ShoppingBag, title: 'e-commerce', tags: ['Shopware', 'Silverstripe']},
            {icon: Code2, title: 'rest apis', tags: ['NestJS', 'Express', 'Silverstripe']},
            {icon: Database, title: 'api integration', tags: ['GraphQL', 'REST', 'SOAP']},
        ],
    },
    {
        label: <>stack · @ <a href="https://www.cic.at/" target="_blank" rel="noreferrer">cic</a></>,
        items: [
            {
                icon: LayoutGrid,
                title: 'frontend',
                tags: ['React (Gatsby)', 'Next.js', 'Twig', 'Silverstripe', 'Bootstrap', 'Tailwind', 'Shadcn UI'],
            },
            {icon: Server, title: 'backend', tags: ['NestJS', 'Silverstripe', 'Express']},
        ],
    },
    {
        label: 'stack · private',
        items: [
            {icon: MonitorSmartphone, title: 'web frontend', tags: ['React', 'Svelte', 'Next.js', 'Vue.js']},
            {icon: ServerCog, title: 'web backend', tags: ['Pocketbase', 'Express', 'NestJS']},
            {icon: Cpu, title: 'system-level', tags: ['C', 'C++', 'Java', 'Swift', 'Rust', 'Python']},
        ],
    },
];

const Skills: React.FC = () => {
    return (
        <div className="skills">
            <h1>skills &amp; experience</h1>

            {groups.map((group, gi) => (
                <section key={gi} className="skill-group">
                    <div className="skill-group__label">{group.label}</div>
                    <div className="skill-grid">
                        {group.items.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="skill-card">
                                    <div className="skill-card__head">
                                        <span className="skill-card__icon">
                                            <Icon size={18} strokeWidth={1.5}/>
                                        </span>
                                        <span className="skill-card__title">{item.title}</span>
                                    </div>
                                    <div className="tag-list">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Skills;
