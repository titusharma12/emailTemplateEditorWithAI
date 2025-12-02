import { create } from "zustand";

interface DeviceState {
  device: "desktop" | "mobile";
  setDevice: (device: "desktop" | "mobile") => void;
}

export const useDeviceStore = create<DeviceState>((set) => ({
  device: "desktop",
  setDevice: (device) => set({ device }),
}));

export const useDragStore = create<any>((set) => ({
  DragElementLayout: {
    dragLayout: null,
  },
  setDragElementLayout: (layout: any) =>
    set({
      DragElementLayout: { dragLayout: layout },
    }),
}));


export const useEmailTemplateStore = create<any>((set) => ({
  emailTemplate: [],
  setEmailTemplate: (updateFn: any) =>
    set((state: any) => ({
      emailTemplate: updateFn(state.emailTemplate),
    })),
}));
