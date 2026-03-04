import * as React from 'react';
import {
    AlertDialogRoot,
    AlertDialogPortal,
    AlertDialogBackdrop,
    AlertDialogViewport,
    AlertDialogPopup,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogClose,
    AlertDialogTrigger
} from '../AlertDialog';
import { Button } from '../Button';

export interface ConfirmDialogProps {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    title: string;
    description?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    /** Called when the confirm button is clicked (dialog closes automatically). */
    onConfirm?: () => void;
    /** Called when the cancel button or backdrop is clicked. */
    onCancel?: () => void;
    /**
     * Visual tone of the confirm button.
     * @default 'default'
     */
    variant?: 'default' | 'destructive';
    /** Element that opens the dialog when clicked. Omit for controlled usage. */
    trigger?: React.ReactNode;
}

export function ConfirmDialog({
    open,
    defaultOpen,
    onOpenChange,
    title,
    description,
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
    onConfirm,
    onCancel,
    variant = 'default',
    trigger
}: ConfirmDialogProps) {
    return (
        <AlertDialogRoot
            open={open}
            defaultOpen={defaultOpen}
            onOpenChange={onOpenChange}
        >
            {trigger && (
                <AlertDialogTrigger render={trigger as React.ReactElement} />
            )}
            <AlertDialogPortal>
                <AlertDialogBackdrop />
                <AlertDialogViewport>
                    <AlertDialogPopup>
                        <AlertDialogTitle>{title}</AlertDialogTitle>
                        {description && (
                            <AlertDialogDescription>
                                {description}
                            </AlertDialogDescription>
                        )}
                        <div className="flex justify-end gap-3">
                            <AlertDialogClose
                                onClick={onCancel}
                                render={<Button variant="outline" />}
                            >
                                {cancelLabel}
                            </AlertDialogClose>
                            <AlertDialogClose
                                onClick={onConfirm}
                                render={
                                    <Button
                                        variant={
                                            variant === 'destructive'
                                                ? 'destructive'
                                                : 'primary'
                                        }
                                    />
                                }
                            >
                                {confirmLabel}
                            </AlertDialogClose>
                        </div>
                    </AlertDialogPopup>
                </AlertDialogViewport>
            </AlertDialogPortal>
        </AlertDialogRoot>
    );
}
