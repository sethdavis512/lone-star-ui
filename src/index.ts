// Components
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Input } from './components/Input';
export type { InputProps } from './components/Input';

export {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from './components/Card';

export { Badge } from './components/Badge';
export type { BadgeProps } from './components/Badge';

export { Alert, AlertTitle, AlertDescription } from './components/Alert';
export type { AlertProps } from './components/Alert';

export { Avatar } from './components/Avatar';
export type { AvatarProps } from './components/Avatar';

export {
    ComboboxRoot,
    ComboboxPortal,
    ComboboxGroup,
    ComboboxCollection,
    ComboboxValue,
    ComboboxChips,
    ComboboxChip,
    ComboboxChipRemove,
    ComboboxInput,
    ComboboxTrigger,
    ComboboxClear,
    ComboboxPositioner,
    ComboboxPopup,
    ComboboxList,
    ComboboxItem,
    ComboboxItemIndicator,
    ComboboxItemText,
    ComboboxEmpty,
    ComboboxSeparator,
    ComboboxGroupLabel,
    ComboboxStatus,
    ComboboxIcon
} from './components/Combobox';

export {
    CheckboxRoot,
    CheckboxIndicator,
    CheckboxGroup
} from './components/Checkbox';

export { RadioGroup, RadioRoot, RadioIndicator } from './components/Radio';

export { SwitchRoot, SwitchThumb } from './components/Switch';

export {
    SelectRoot,
    SelectPortal,
    SelectBackdrop,
    SelectGroup,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
    SelectIcon,
    SelectPositioner,
    SelectPopup,
    SelectList,
    SelectItem,
    SelectItemText,
    SelectItemIndicator,
    SelectGroupLabel,
    SelectScrollUpArrow,
    SelectScrollDownArrow
} from './components/Select';

export {
    FieldRoot,
    FieldLabel,
    FieldControl,
    FieldDescription,
    FieldError,
    FieldItem,
    FieldValidity
} from './components/Field';

export { FieldsetRoot, FieldsetLegend } from './components/Fieldset';

export {
    DialogRoot,
    DialogPortal,
    DialogBackdrop,
    DialogViewport,
    DialogPopup,
    DialogTitle,
    DialogDescription,
    DialogClose,
    DialogTrigger
} from './components/Dialog';

export {
    AlertDialogRoot,
    AlertDialogPortal,
    AlertDialogBackdrop,
    AlertDialogViewport,
    AlertDialogPopup,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogClose,
    AlertDialogTrigger
} from './components/AlertDialog';

export {
    DrawerRoot,
    DrawerPortal,
    DrawerTrigger,
    DrawerBackdrop,
    DrawerViewport,
    DrawerPopup,
    DrawerContent,
    DrawerHandle,
    DrawerTitle,
    DrawerDescription,
    DrawerClose
} from './components/Drawer';

export {
    TooltipProvider,
    TooltipRoot,
    TooltipPortal,
    TooltipTrigger,
    TooltipPositioner,
    TooltipPopup,
    TooltipArrow
} from './components/Tooltip';

export {
    PopoverRoot,
    PopoverPortal,
    PopoverTrigger,
    PopoverBackdrop,
    PopoverPositioner,
    PopoverPopup,
    PopoverTitle,
    PopoverDescription,
    PopoverClose,
    PopoverArrow
} from './components/Popover';

export {
    PreviewCardRoot,
    PreviewCardPortal,
    PreviewCardTrigger,
    PreviewCardBackdrop,
    PreviewCardPositioner,
    PreviewCardPopup,
    PreviewCardArrow
} from './components/PreviewCard';

export {
    TabsRoot,
    TabsList,
    TabsTab,
    TabsIndicator,
    TabsPanel
} from './components/Tabs';

export {
    AccordionRoot,
    AccordionItem,
    AccordionHeader,
    AccordionTrigger,
    AccordionPanel
} from './components/Accordion';

export {
    CollapsibleRoot,
    CollapsibleTrigger,
    CollapsiblePanel
} from './components/Collapsible';

export { SeparatorRoot } from './components/Separator';

// ── v0.7.0 — Menus & Toolbar ─────────────────────────────────────────────────

export {
    MenuRoot,
    MenuTrigger,
    MenuPortal,
    MenuBackdrop,
    MenuPositioner,
    MenuPopup,
    MenuArrow,
    MenuItem,
    MenuLinkItem,
    MenuSeparator,
    MenuGroup,
    MenuGroupLabel,
    MenuRadioGroup,
    MenuRadioItem,
    MenuRadioItemIndicator,
    MenuCheckboxItem,
    MenuCheckboxItemIndicator,
    MenuSubmenuRoot,
    MenuSubmenuTrigger
} from './components/Menu';

export {
    ContextMenuRoot,
    ContextMenuTrigger,
    ContextMenuPortal,
    ContextMenuBackdrop,
    ContextMenuPositioner,
    ContextMenuPopup,
    ContextMenuArrow,
    ContextMenuItem,
    ContextMenuLinkItem,
    ContextMenuSeparator,
    ContextMenuGroup,
    ContextMenuGroupLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuRadioItemIndicator,
    ContextMenuCheckboxItem,
    ContextMenuCheckboxItemIndicator,
    ContextMenuSubmenuRoot,
    ContextMenuSubmenuTrigger
} from './components/ContextMenu';

export { MenubarRoot } from './components/Menubar';

export {
    ToolbarRoot,
    ToolbarButton,
    ToolbarLink,
    ToolbarSeparator,
    ToolbarGroup,
    ToolbarInput
} from './components/Toolbar';

// ── Kindling ─────────────────────────────────────────────────────────────────

export { SearchField } from './components/SearchField';
export type { SearchFieldProps } from './components/SearchField';

export { AvatarLabel } from './components/AvatarLabel';
export type { AvatarLabelProps } from './components/AvatarLabel';

// ── Bonfire ──────────────────────────────────────────────────────────────────

export { ProfileCard } from './components/ProfileCard';
export type { ProfileCardProps } from './components/ProfileCard';

export { PageHeader } from './components/PageHeader';
export type { PageHeaderProps } from './components/PageHeader';

export { ConfirmDialog } from './components/ConfirmDialog';
export type { ConfirmDialogProps } from './components/ConfirmDialog';

// ── Utilities ─────────────────────────────────────────────────────────────────

// Utilities — exporting cn is optional, but useful for consumers
// who want consistent class merging with your library
export { cn } from './utils/cn';
