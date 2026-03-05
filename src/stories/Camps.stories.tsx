import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from '../components/PageHeader';
import { SearchField } from '../components/SearchField';
import { ProfileCard } from '../components/ProfileCard';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from '../components/Card';

const meta: Meta = {
    title: 'Camps/Overview',
    parameters: { layout: 'fullscreen' },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj;

// ── Shared placeholder primitives ─────────────────────────────────────────────

function SkeletonLine({ w = 'w-40', h = 'h-4' }: { w?: string; h?: string }) {
    return <div className={`${h} ${w} rounded bg-pecan/10`} />;
}

function SkeletonAvatar() {
    return <div className="h-10 w-10 rounded-full bg-pecan/10" />;
}

function SkeletonRow() {
    return (
        <div className="flex items-center gap-4 border-b border-pecan/8 px-6 py-4 last:border-0">
            <SkeletonAvatar />
            <div className="flex flex-1 flex-col gap-2">
                <SkeletonLine w="w-36" />
                <SkeletonLine w="w-52" h="h-3" />
            </div>
            <SkeletonLine w="w-20" h="h-5" />
        </div>
    );
}

// ── Template: Contacts List ───────────────────────────────────────────────────

export const ContactsList: Story = {
    name: 'Contacts List',
    render: () => (
        <div className="min-h-screen bg-mesa/20 font-sans text-pecan">
            <div className="mx-auto max-w-4xl space-y-6 px-6 py-8">
                <PageHeader
                    title="[Page Title]"
                    subtitle="[Record count or description]"
                    actions={
                        <>
                            <Button variant="outline" size="sm" disabled>
                                [Secondary]
                            </Button>
                            <Button size="sm" disabled>
                                [Primary Action]
                            </Button>
                        </>
                    }
                />

                <SearchField placeholder="[Search placeholder…]" disabled />

                <div className="overflow-hidden rounded-lg border border-pecan/10 bg-surface">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <SkeletonRow key={i} />
                    ))}
                </div>

                <div className="flex justify-center gap-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="h-8 w-8 rounded bg-pecan/10" />
                    ))}
                </div>
            </div>
        </div>
    )
};

// ── Template: Contact Detail ──────────────────────────────────────────────────

export const ContactDetail: Story = {
    name: 'Contact Detail',
    render: () => (
        <div className="min-h-screen bg-mesa/20 font-sans text-pecan">
            <div className="mx-auto max-w-2xl space-y-6 px-6 py-8">
                <PageHeader
                    eyebrow="[Section]"
                    title="[Contact Name]"
                    actions={
                        <>
                            <Button variant="outline" size="sm" disabled>
                                [Edit]
                            </Button>
                            <Button variant="destructive" size="sm" disabled>
                                [Delete]
                            </Button>
                        </>
                    }
                />

                <div className="grid gap-6 sm:grid-cols-[auto_1fr]">
                    <div className="flex justify-center sm:justify-start">
                        <div className="h-24 w-24 rounded-full bg-pecan/15" />
                    </div>

                    <div className="space-y-5">
                        {['[Email]', '[Phone]', '[City]'].map((label) => (
                            <div key={label} className="space-y-1">
                                <p className="text-xs font-medium uppercase tracking-wide text-pecan/40">
                                    {label}
                                </p>
                                <SkeletonLine w="w-48" />
                            </div>
                        ))}
                        <div className="space-y-1">
                            <p className="text-xs font-medium uppercase tracking-wide text-pecan/40">
                                [Status]
                            </p>
                            <div className="h-5 w-20 rounded-full bg-pecan/10" />
                        </div>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>[Related Section Title]</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <SkeletonLine
                                    key={i}
                                    w={i === 1 ? 'w-full' : 'w-3/4'}
                                />
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className="justify-end gap-2">
                        <Button variant="outline" size="sm" disabled>
                            [Action]
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
};

// ── Template: Settings ────────────────────────────────────────────────────────

export const Settings: Story = {
    name: 'Settings',
    render: () => (
        <div className="min-h-screen bg-mesa/20 font-sans text-pecan">
            <div className="mx-auto max-w-3xl space-y-8 px-6 py-8">
                <PageHeader
                    title="[Settings Title]"
                    subtitle="[Settings description]"
                />

                <div className="space-y-4">
                    {['[Section A]', '[Section B]', '[Section C]'].map(
                        (section) => (
                            <Card key={section}>
                                <CardHeader>
                                    <CardTitle>{section}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-1">
                                                <SkeletonLine w="w-32" />
                                                <SkeletonLine
                                                    w="w-56"
                                                    h="h-3"
                                                />
                                            </div>
                                            <div className="h-6 w-10 rounded-full bg-pecan/15" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-1">
                                                <SkeletonLine w="w-28" />
                                                <SkeletonLine
                                                    w="w-48"
                                                    h="h-3"
                                                />
                                            </div>
                                            <div className="h-6 w-10 rounded-full bg-pecan/15" />
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="justify-end">
                                    <Button size="sm" disabled>
                                        [Save Changes]
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    )}
                </div>
            </div>
        </div>
    )
};
