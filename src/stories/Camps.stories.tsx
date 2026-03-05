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
import { Alert, AlertTitle, AlertDescription } from '../components/Alert';

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

// ── Template: Dashboard ───────────────────────────────────────────────────────

function StatCard({ label, value = '—' }: { label: string; value?: string }) {
    return (
        <Card>
            <CardContent className="pt-6">
                <p className="text-xs font-medium uppercase tracking-wide text-pecan/40">
                    {label}
                </p>
                <p className="mt-1 text-3xl font-semibold text-pecan">
                    {value}
                </p>
            </CardContent>
        </Card>
    );
}

export const Dashboard: Story = {
    name: 'Dashboard',
    render: () => (
        <div className="min-h-screen bg-mesa/20 font-sans text-pecan">
            <div className="mx-auto max-w-5xl space-y-6 px-6 py-8">
                <PageHeader
                    title="[Dashboard Title]"
                    subtitle="[Subtitle or date range]"
                    actions={
                        <Button size="sm" disabled>
                            [+ New Record]
                        </Button>
                    }
                />

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <StatCard label="[Metric A]" />
                    <StatCard label="[Metric B]" />
                    <StatCard label="[Metric C]" />
                    <StatCard label="[Metric D]" />
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                    <Card>
                        <CardHeader>
                            <CardTitle>[Chart Title]</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex h-52 items-end gap-2">
                                {[55, 40, 70, 45, 85, 60, 75].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 rounded-t bg-pecan/10"
                                        style={{ height: `${h}%` }}
                                    />
                                ))}
                            </div>
                            <div className="mt-2 flex justify-between text-xs text-pecan/30">
                                {[
                                    'Mon',
                                    'Tue',
                                    'Wed',
                                    'Thu',
                                    'Fri',
                                    'Sat',
                                    'Sun'
                                ].map((d) => (
                                    <span key={d}>{d}</span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>[Recent Activity]</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-0">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-pecan/10" />
                                    <div className="flex-1 space-y-1.5">
                                        <SkeletonLine w="w-full" h="h-3" />
                                        <SkeletonLine w="w-2/3" h="h-3" />
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
};

// ── Template: Sign In ─────────────────────────────────────────────────────────

export const SignIn: Story = {
    name: 'Sign In',
    render: () => (
        <div className="flex min-h-screen items-center justify-center bg-mesa/20 font-sans px-4">
            <div className="w-full max-w-sm space-y-6">
                <div className="flex flex-col items-center gap-3 text-center">
                    <div className="h-12 w-12 rounded-xl bg-pecan/15" />
                    <div className="space-y-1">
                        <SkeletonLine w="w-32" />
                        <SkeletonLine w="w-52" h="h-3" />
                    </div>
                </div>

                <Card>
                    <CardContent className="space-y-4 pt-6">
                        <div className="space-y-1.5">
                            <SkeletonLine w="w-14" h="h-3" />
                            <div className="h-10 w-full rounded-md border border-pecan/15 bg-pecan/5" />
                        </div>
                        <div className="space-y-1.5">
                            <div className="flex justify-between">
                                <SkeletonLine w="w-16" h="h-3" />
                                <SkeletonLine w="w-24" h="h-3" />
                            </div>
                            <div className="h-10 w-full rounded-md border border-pecan/15 bg-pecan/5" />
                        </div>
                        <Button className="w-full" disabled>
                            [Sign In]
                        </Button>
                    </CardContent>
                </Card>

                <p className="text-center text-xs text-pecan/40">
                    [Don't have an account?]{' '}
                    <span className="text-sky underline">[Sign Up]</span>
                </p>
            </div>
        </div>
    )
};

// ── Template: Empty State ─────────────────────────────────────────────────────

export const EmptyState: Story = {
    name: 'Empty State',
    render: () => (
        <div className="flex min-h-screen items-center justify-center bg-mesa/20 font-sans px-4">
            <div className="mx-auto max-w-sm space-y-6 text-center">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-2xl border border-pecan/10 bg-pecan/5">
                    <div className="h-14 w-14 rounded-full bg-pecan/15" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-pecan">
                        [No Records Yet]
                    </h2>
                    <p className="text-sm text-pecan/50">
                        [Explain what this section is for and what the user
                        should do to get started.]
                    </p>
                </div>
                <div className="flex justify-center gap-3">
                    <Button variant="outline" disabled>
                        [Learn More]
                    </Button>
                    <Button disabled>[+ Add First Record]</Button>
                </div>
            </div>
        </div>
    )
};

// ── Template: Notification Inbox ──────────────────────────────────────────────

type NotifKind = 'info' | 'warning' | 'error' | 'default';
const NOTIF_KINDS: NotifKind[] = ['default', 'info', 'warning', 'error'];
const NOTIF_LABELS = ['[Mention]', '[Reminder]', '[Alert]', '[System]'];

export const NotificationInbox: Story = {
    name: 'Notification Inbox',
    render: () => (
        <div className="min-h-screen bg-mesa/20 font-sans text-pecan">
            <div className="mx-auto max-w-2xl space-y-6 px-6 py-8">
                <PageHeader
                    title="[Notifications]"
                    subtitle="[Unread count]"
                    actions={
                        <Button variant="ghost" size="sm" disabled>
                            Mark all read
                        </Button>
                    }
                />

                <div className="space-y-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 rounded-lg border border-pecan/10 bg-surface px-5 py-4"
                        >
                            <div className="mt-0.5 h-8 w-8 shrink-0 rounded-full bg-pecan/10" />
                            <div className="flex-1 space-y-1.5">
                                <div className="flex items-center justify-between gap-4">
                                    <SkeletonLine w="w-48" />
                                    <SkeletonLine w="w-16" h="h-3" />
                                </div>
                                <SkeletonLine w="w-full" h="h-3" />
                                {i % 2 === 0 && (
                                    <Badge
                                        variant={
                                            i === 0 ? 'prickly-pear' : 'sky'
                                        }
                                    >
                                        {NOTIF_LABELS[i % NOTIF_LABELS.length]}
                                    </Badge>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};
