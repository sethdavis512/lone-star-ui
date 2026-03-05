import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SearchField } from '../components/SearchField';
import { ProfileCard } from '../components/ProfileCard';
import { AvatarLabel } from '../components/AvatarLabel';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/Card';
import { Input } from '../components/Input';
import { SwitchRoot, SwitchThumb } from '../components/Switch';
import { FieldRoot, FieldLabel, FieldControl, FieldDescription } from '../components/Field';
import { Alert, AlertTitle, AlertDescription } from '../components/Alert';
import { TabsRoot, TabsList, TabsTab, TabsPanel } from '../components/Tabs';

const meta: Meta = {
    title: 'Plains/Overview',
    parameters: { layout: 'fullscreen' },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj;

// ── Seed data ─────────────────────────────────────────────────────────────────

type AvatarColor =
    | 'sky'
    | 'longhorn'
    | 'pecan'
    | 'bluebonnet'
    | 'prickly-pear'
    | 'mesa';

type BadgeVariant =
    | 'sky'
    | 'longhorn'
    | 'pecan'
    | 'bluebonnet'
    | 'prickly-pear'
    | 'outline';

interface Contact {
    id: number;
    name: string;
    initials: string;
    email: string;
    phone: string;
    city: string;
    status: string;
    color: AvatarColor;
    badgeVariant: BadgeVariant;
    bio?: string;
}

const CONTACTS: Contact[] = [
    {
        id: 1,
        name: 'Willie Nelson',
        initials: 'WN',
        email: 'willie@austin.tx',
        phone: '(512) 555-0101',
        city: 'Austin',
        status: 'Friend',
        color: 'longhorn',
        badgeVariant: 'longhorn',
        bio: 'Outlaw country legend, farm aid founder, and proud Texan from Abbott.'
    },
    {
        id: 2,
        name: 'Selena Quintanilla',
        initials: 'SQ',
        email: 'selena@corpuschristi.tx',
        phone: '(361) 555-0202',
        city: 'Corpus Christi',
        status: 'Acquaintance',
        color: 'prickly-pear',
        badgeVariant: 'prickly-pear'
    },
    {
        id: 3,
        name: 'Matthew McConaughey',
        initials: 'MM',
        email: 'matthew@uvalde.tx',
        phone: '(830) 555-0303',
        city: 'Uvalde',
        status: 'Colleague',
        color: 'pecan',
        badgeVariant: 'pecan'
    },
    {
        id: 4,
        name: 'Barbara Jordan',
        initials: 'BJ',
        email: 'barbara@houston.tx',
        phone: '(713) 555-0404',
        city: 'Houston',
        status: 'Family',
        color: 'bluebonnet',
        badgeVariant: 'bluebonnet',
        bio: 'First Southern Black woman elected to Congress. A giant of Texas politics.'
    },
    {
        id: 5,
        name: 'Buddy Holly',
        initials: 'BH',
        email: 'buddy@lubbock.tx',
        phone: '(806) 555-0505',
        city: 'Lubbock',
        status: 'Friend',
        color: 'sky',
        badgeVariant: 'sky'
    },
    {
        id: 6,
        name: 'Sam Houston',
        initials: 'SH',
        email: 'sam@washington-on-the-brazos.tx',
        phone: '(979) 555-0606',
        city: 'Washington-on-the-Brazos',
        status: 'Colleague',
        color: 'mesa',
        badgeVariant: 'outline',
        bio: 'President of the Republic of Texas. Commander in chief. All-around legend.'
    }
];

// ── Page: Contacts Directory ──────────────────────────────────────────────────

function ContactsDirectoryPage() {
    const [search, setSearch] = React.useState('');

    const filtered = CONTACTS.filter(
        (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.city.toLowerCase().includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-mesa/20 font-sans text-pecan">
            <div className="mx-auto max-w-4xl space-y-6 px-6 py-8">
                <PageHeader
                    title="Contacts"
                    subtitle={`${filtered.length} contact${
                        filtered.length !== 1 ? 's' : ''
                    }`}
                    actions={
                        <>
                            <Button variant="outline" size="sm">
                                Export
                            </Button>
                            <Button size="sm">New Contact</Button>
                        </>
                    }
                />

                <SearchField
                    placeholder="Search by name, city, or email…"
                    value={search}
                    onValueChange={setSearch}
                />

                {filtered.length === 0 ? (
                    <p className="py-12 text-center text-pecan/50">
                        No contacts found for "{search}"
                    </p>
                ) : (
                    <div className="overflow-hidden rounded-lg border border-pecan/10 bg-surface">
                        {filtered.map((contact) => (
                            <div
                                key={contact.id}
                                className="flex items-center justify-between border-b border-pecan/8 px-6 py-4 last:border-0"
                            >
                                <AvatarLabel
                                    initials={contact.initials}
                                    avatarColor={contact.color}
                                    name={contact.name}
                                    subtitle={contact.email}
                                />
                                <div className="flex items-center gap-3">
                                    <Badge variant={contact.badgeVariant}>
                                        {contact.status}
                                    </Badge>
                                    <span className="hidden text-sm text-pecan/50 sm:block">
                                        {contact.city}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export const ContactsDirectory: Story = {
    name: 'Contacts Directory',
    render: () => <ContactsDirectoryPage />
};

// ── Page: Contact Profile ─────────────────────────────────────────────────────

function ContactProfilePage({ contact }: { contact: Contact }) {
    const [deleted, setDeleted] = React.useState(false);

    if (deleted) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-mesa/20 font-sans">
                <div className="text-center text-pecan/60">
                    <p className="text-lg font-medium">Contact removed.</p>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="mt-3"
                        onClick={() => setDeleted(false)}
                    >
                        Undo
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-mesa/20 font-sans text-pecan">
            <div className="mx-auto max-w-2xl space-y-6 px-6 py-8">
                <PageHeader
                    eyebrow="Contacts"
                    title={contact.name}
                    actions={
                        <>
                            <Button variant="outline" size="sm">
                                Edit
                            </Button>
                            <ConfirmDialog
                                title={`Delete ${contact.name}?`}
                                description="This will permanently remove them from your contacts. This cannot be undone."
                                confirmLabel="Delete"
                                cancelLabel="Keep"
                                variant="destructive"
                                onConfirm={() => setDeleted(true)}
                                trigger={
                                    <Button variant="destructive" size="sm">
                                        Delete
                                    </Button>
                                }
                            />
                        </>
                    }
                />

                <ProfileCard
                    initials={contact.initials}
                    avatarColor={contact.color}
                    name={contact.name}
                    role={contact.city}
                    bio={contact.bio}
                    badge={contact.status}
                    badgeVariant={contact.badgeVariant}
                    actions={
                        <>
                            <Button variant="outline" size="sm">
                                Message
                            </Button>
                            <Button size="sm">Call</Button>
                        </>
                    }
                />

                <div className="rounded-lg border border-pecan/10 bg-surface p-6 space-y-4">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-pecan/50">
                        Contact Info
                    </h2>
                    {[
                        { label: 'Email', value: contact.email },
                        { label: 'Phone', value: contact.phone },
                        { label: 'City', value: contact.city }
                    ].map(({ label, value }) => (
                        <div key={label}>
                            <p className="text-xs text-pecan/40 uppercase tracking-wide mb-0.5">
                                {label}
                            </p>
                            <p className="text-sm text-pecan">{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export const ContactProfile: Story = {
    name: 'Contact Profile — Willie Nelson',
    render: () => <ContactProfilePage contact={CONTACTS[0]!} />
};

export const ContactProfileIcons: Story = {
    name: 'Contact Profile — Barbara Jordan',
    render: () => <ContactProfilePage contact={CONTACTS[3]!} />
};

// ── Page: Dashboard ───────────────────────────────────────────────────────────

function DashboardPage() {
    const statusCounts = CONTACTS.reduce<Record<string, number>>((acc, c) => {
        acc[c.status] = (acc[c.status] ?? 0) + 1;
        return acc;
    }, {});
    const cityCount = new Set(CONTACTS.map((c) => c.city)).size;

    return (
        <div className="min-h-screen bg-mesa/20 font-sans text-pecan">
            <div className="mx-auto max-w-5xl space-y-6 px-6 py-8">
                <PageHeader
                    title="Dashboard"
                    subtitle="Your contact network at a glance"
                    actions={<Button size="sm">New Contact</Button>}
                />

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {[
                        { label: 'Total', value: CONTACTS.length, color: 'text-pecan' },
                        { label: 'Friends', value: statusCounts['Friend'] ?? 0, color: 'text-longhorn' },
                        { label: 'Colleagues', value: statusCounts['Colleague'] ?? 0, color: 'text-bluebonnet' },
                        { label: 'Cities', value: cityCount, color: 'text-sky' }
                    ].map(({ label, value, color }) => (
                        <Card key={label}>
                            <CardContent className="pt-6">
                                <p className="text-xs font-medium uppercase tracking-wide text-pecan/40">
                                    {label}
                                </p>
                                <p className={`mt-1 text-3xl font-semibold ${color}`}>{value}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                    <Card>
                        <CardHeader>
                            <CardTitle>By Status</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {Object.entries(statusCounts).map(([status, count]) => (
                                <div key={status} className="flex items-center gap-3">
                                    <span className="w-28 shrink-0 text-sm text-pecan/60">{status}</span>
                                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-pecan/10">
                                        <div
                                            className="h-full rounded-full bg-sky transition-all"
                                            style={{ width: `${(count / CONTACTS.length) * 100}%` }}
                                        />
                                    </div>
                                    <span className="w-4 text-right text-sm font-medium">{count}</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Contacts</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 pt-0">
                            {CONTACTS.slice(0, 4).map((contact) => (
                                <AvatarLabel
                                    key={contact.id}
                                    initials={contact.initials}
                                    avatarColor={contact.color}
                                    name={contact.name}
                                    subtitle={contact.city}
                                />
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export const Dashboard: Story = {
    name: 'Dashboard',
    render: () => <DashboardPage />
};

// ── Page: New Contact ─────────────────────────────────────────────────────────

const STATUS_OPTIONS = ['Friend', 'Colleague', 'Acquaintance', 'Family'] as const;

function NewContactPage() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [city, setCity] = React.useState('');
    const [status, setStatus] = React.useState<string>('Friend');
    const [saved, setSaved] = React.useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSaved(true);
    }

    return (
        <div className="min-h-screen bg-mesa/20 font-sans text-pecan">
            <div className="mx-auto max-w-xl space-y-6 px-6 py-8">
                <PageHeader eyebrow="Contacts" title="New Contact" />

                {saved && (
                    <Alert variant="info">
                        <AlertTitle>Contact saved!</AlertTitle>
                        <AlertDescription>
                            {firstName} {lastName} has been added to your contacts.
                        </AlertDescription>
                    </Alert>
                )}

                <Card>
                    <CardContent className="pt-6">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <FieldRoot name="firstName">
                                    <FieldLabel>First name</FieldLabel>
                                    <FieldControl
                                        render={
                                            <Input
                                                placeholder="Willie"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        }
                                    />
                                </FieldRoot>
                                <FieldRoot name="lastName">
                                    <FieldLabel>Last name</FieldLabel>
                                    <FieldControl
                                        render={
                                            <Input
                                                placeholder="Nelson"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        }
                                    />
                                </FieldRoot>
                            </div>

                            <FieldRoot name="email">
                                <FieldLabel>Email</FieldLabel>
                                <FieldControl
                                    render={
                                        <Input
                                            type="email"
                                            placeholder="willie@austin.tx"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    }
                                />
                            </FieldRoot>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <FieldRoot name="phone">
                                    <FieldLabel>Phone</FieldLabel>
                                    <FieldControl
                                        render={
                                            <Input
                                                type="tel"
                                                placeholder="(512) 555-0101"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        }
                                    />
                                </FieldRoot>
                                <FieldRoot name="city">
                                    <FieldLabel>City</FieldLabel>
                                    <FieldControl
                                        render={
                                            <Input
                                                placeholder="Austin"
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                            />
                                        }
                                    />
                                </FieldRoot>
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm font-medium text-pecan">Status</p>
                                <div className="flex flex-wrap gap-2">
                                    {STATUS_OPTIONS.map((s) => (
                                        <button
                                            key={s}
                                            type="button"
                                            onClick={() => setStatus(s)}
                                            className={[
                                                'rounded-full border px-3 py-1 text-sm transition-colors',
                                                status === s
                                                    ? 'border-sky bg-sky/10 font-medium text-sky'
                                                    : 'border-pecan/20 text-pecan/60 hover:border-pecan/40'
                                            ].join(' ')}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <CardFooter className="px-0 pt-2 justify-end gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => {
                                        setFirstName('');
                                        setLastName('');
                                        setEmail('');
                                        setPhone('');
                                        setCity('');
                                        setStatus('Friend');
                                        setSaved(false);
                                    }}
                                >
                                    Clear
                                </Button>
                                <Button type="submit">Save Contact</Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export const NewContact: Story = {
    name: 'New Contact',
    render: () => <NewContactPage />
};

// ── Page: Settings ────────────────────────────────────────────────────────────

function SettingsPage() {
    const [name, setName] = React.useState('Willie Nelson');
    const [email, setEmail] = React.useState('willie@austin.tx');
    const [profileSaved, setProfileSaved] = React.useState(false);

    const [emailNotifs, setEmailNotifs] = React.useState(true);
    const [pushNotifs, setPushNotifs] = React.useState(false);
    const [weeklyDigest, setWeeklyDigest] = React.useState(true);

    const [deleted, setDeleted] = React.useState(false);

    if (deleted) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-mesa/20 font-sans">
                <div className="text-center text-pecan/60">
                    <p className="text-lg font-medium">Account deleted.</p>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="mt-3"
                        onClick={() => setDeleted(false)}
                    >
                        Undo
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-mesa/20 font-sans text-pecan">
            <div className="mx-auto max-w-2xl space-y-8 px-6 py-8">
                <PageHeader title="Settings" subtitle="Manage your account and preferences" />

                <TabsRoot defaultValue="profile">
                    <TabsList>
                        <TabsTab value="profile">Profile</TabsTab>
                        <TabsTab value="notifications">Notifications</TabsTab>
                        <TabsTab value="danger">Danger Zone</TabsTab>
                    </TabsList>

                    <TabsPanel value="profile" className="pt-6 space-y-6">
                        {profileSaved && (
                            <Alert variant="info">
                                <AlertTitle>Profile updated</AlertTitle>
                                <AlertDescription>Your changes have been saved.</AlertDescription>
                            </Alert>
                        )}
                        <Card>
                            <CardContent className="space-y-4 pt-6">
                                <FieldRoot name="name">
                                    <FieldLabel>Display name</FieldLabel>
                                    <FieldControl
                                        render={
                                            <Input
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                    setProfileSaved(false);
                                                }}
                                            />
                                        }
                                    />
                                </FieldRoot>
                                <FieldRoot name="email">
                                    <FieldLabel>Email address</FieldLabel>
                                    <FieldControl
                                        render={
                                            <Input
                                                type="email"
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    setProfileSaved(false);
                                                }}
                                            />
                                        }
                                    />
                                    <FieldDescription>
                                        Used for notifications and sign-in.
                                    </FieldDescription>
                                </FieldRoot>
                            </CardContent>
                            <CardFooter className="justify-end">
                                <Button onClick={() => setProfileSaved(true)}>
                                    Save Changes
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsPanel>

                    <TabsPanel value="notifications" className="pt-6">
                        <Card>
                            <CardContent className="divide-y divide-pecan/8 pt-6">
                                {[
                                    {
                                        label: 'Email notifications',
                                        description: 'Receive updates and activity via email.',
                                        checked: emailNotifs,
                                        onChange: setEmailNotifs
                                    },
                                    {
                                        label: 'Push notifications',
                                        description: 'Get alerts sent to your device.',
                                        checked: pushNotifs,
                                        onChange: setPushNotifs
                                    },
                                    {
                                        label: 'Weekly digest',
                                        description: 'A summary of activity every Monday.',
                                        checked: weeklyDigest,
                                        onChange: setWeeklyDigest
                                    }
                                ].map(({ label, description, checked, onChange }) => (
                                    <div
                                        key={label}
                                        className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                                    >
                                        <div>
                                            <p className="text-sm font-medium text-pecan">{label}</p>
                                            <p className="text-xs text-pecan/50">{description}</p>
                                        </div>
                                        <SwitchRoot
                                            checked={checked}
                                            onCheckedChange={onChange}
                                            aria-label={label}
                                        >
                                            <SwitchThumb />
                                        </SwitchRoot>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsPanel>

                    <TabsPanel value="danger" className="pt-6">
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p className="font-medium text-prickly-pear">Delete account</p>
                                        <p className="mt-0.5 text-sm text-pecan/60">
                                            Permanently remove your account and all associated data. This cannot be undone.
                                        </p>
                                    </div>
                                    <ConfirmDialog
                                        title="Delete your account?"
                                        description="All your contacts and data will be permanently deleted. There is no way to recover this information."
                                        confirmLabel="Delete account"
                                        cancelLabel="Cancel"
                                        variant="destructive"
                                        onConfirm={() => setDeleted(true)}
                                        trigger={
                                            <Button variant="destructive">Delete Account</Button>
                                        }
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsPanel>
                </TabsRoot>
            </div>
        </div>
    );
}

export const Settings: Story = {
    name: 'Settings',
    render: () => <SettingsPage />
};

// ── Page: Notification Inbox ──────────────────────────────────────────────────

type NotifType = 'mention' | 'reminder' | 'milestone' | 'system';

interface Notification {
    id: number;
    type: NotifType;
    message: string;
    contact: Contact;
    time: string;
    read: boolean;
}

const NOTIFICATIONS: Notification[] = [
    { id: 1, type: 'mention', message: 'Willie Nelson commented on your note.', contact: CONTACTS[0]!, time: '2m ago', read: false },
    { id: 2, type: 'reminder', message: "Don't forget to follow up with Selena.", contact: CONTACTS[1]!, time: '1h ago', read: false },
    { id: 3, type: 'milestone', message: 'Barbara Jordan joined 1 year ago today.', contact: CONTACTS[3]!, time: '3h ago', read: true },
    { id: 4, type: 'system', message: 'Your export is ready to download.', contact: CONTACTS[4]!, time: 'Yesterday', read: true },
    { id: 5, type: 'mention', message: 'Sam Houston was added to your colleagues.', contact: CONTACTS[5]!, time: '2d ago', read: true }
];

const NOTIF_BADGE: Record<NotifType, BadgeVariant> = {
    mention: 'sky',
    reminder: 'longhorn',
    milestone: 'bluebonnet',
    system: 'pecan'
};

function NotificationInboxPage() {
    const [notifications, setNotifications] = React.useState(NOTIFICATIONS);

    const unreadCount = notifications.filter((n) => !n.read).length;

    function markAllRead() {
        setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    }

    return (
        <div className="min-h-screen bg-mesa/20 font-sans text-pecan">
            <div className="mx-auto max-w-2xl space-y-6 px-6 py-8">
                <PageHeader
                    title="Notifications"
                    subtitle={unreadCount > 0 ? `${unreadCount} unread` : 'All caught up'}
                    actions={
                        unreadCount > 0 ? (
                            <Button variant="ghost" size="sm" onClick={markAllRead}>
                                Mark all read
                            </Button>
                        ) : undefined
                    }
                />

                <div className="space-y-2">
                    {notifications.map((notif) => (
                        <div
                            key={notif.id}
                            className={[
                                'flex items-start gap-4 rounded-lg border px-5 py-4 transition-colors',
                                notif.read
                                    ? 'border-pecan/10 bg-surface'
                                    : 'border-sky/20 bg-sky/5'
                            ].join(' ')}
                        >
                            <AvatarLabel
                                initials={notif.contact.initials}
                                avatarColor={notif.contact.color}
                                name=""
                                subtitle=""
                            />
                            <div className="flex-1 space-y-1">
                                <div className="flex items-start justify-between gap-3">
                                    <p className="text-sm text-pecan">{notif.message}</p>
                                    <span className="shrink-0 text-xs text-pecan/40">{notif.time}</span>
                                </div>
                                <Badge variant={NOTIF_BADGE[notif.type]} className="capitalize">
                                    {notif.type}
                                </Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export const NotificationInbox: Story = {
    name: 'Notification Inbox',
    render: () => <NotificationInboxPage />
};
