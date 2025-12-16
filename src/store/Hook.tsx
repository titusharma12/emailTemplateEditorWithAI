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


export const useEmailTemplateStore = create<any>((set, get) => ({
  emailTemplate: [],
  // setEmailTemplate persists to localStorage when running in the browser
  setEmailTemplate: (value: any) =>
    set((state: any) => {
      const newVal =
        typeof value === "function" ? value(state.emailTemplate) : value;
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("emailTemplate", JSON.stringify(newVal));
        } catch (e) {
          // ignore storage errors
        }
      }
      return { emailTemplate: newVal };
    }),
  // initialize emailTemplate from localStorage (call only on client)
  initEmailTemplate: () => {
    if (typeof window !== "undefined") {
      try {
        const StorageTemplate = JSON.parse(localStorage.getItem("emailTemplate") || "null");
        set({ emailTemplate: StorageTemplate || [] });
      } catch (e) {
        set({ emailTemplate: [] });
      }
    }
  },
}));


export const useSelectedElementStore = create<any>((set) => ({
  selectedElement: null,
  setSelectedElement: (element: any) => set({ selectedElement: element }),
}));


export const useHTMLCodeViewStore = create<any>((set) => ({
  htmlCodeView: false,
  viewHTMLCode: (value: boolean) => set({ htmlCodeView: value }),
}));
