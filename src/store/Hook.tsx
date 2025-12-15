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
  setEmailTemplate: (value: any) =>
    set((state: any) => ({
      emailTemplate:
        typeof value === 'function'
          ? value(state.emailTemplate)
          : value,
    })),
}));



export const useSelectedElementStore = create<any>((set) => ({
  selectedElement: null,
  setSelectedElement: (element: any) => set({ selectedElement: element }),
}));


export const useHTMLCodeViewStore = create<any>((set) => ({
  htmlCodeView: false,
  viewHTMLCode: (value: boolean) => set({ htmlCodeView: value }),
}));
